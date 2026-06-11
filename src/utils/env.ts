export const getBasePath = () => {
  const env = import.meta.env.PUBLIC_BASE_PATH;
  if (!env) {
    throw new Error(
      'PUBLIC_BASE_PATH is not defined in the environment variables',
    );
  }
  return env;
};
