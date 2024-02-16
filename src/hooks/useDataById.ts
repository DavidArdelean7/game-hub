const useDataById = (hook: () => any, id?: number) => {
  const { data } = hook();
  return data.results.find((d: any) => d.id === id);
};

export default useDataById;
