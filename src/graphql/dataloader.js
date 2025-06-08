import DataLoader from 'dataloader';

export function createLoaders(prisma) {
  return {
    projectById: new DataLoader(async (ids) => {
      const projects = await prisma.project.findMany({
        where: { id: { in: ids.map(Number) } },
      });
      return ids.map((id) => projects.find((p) => p.id === Number(id)) || null);
    }),
  };
}
