export const checkLogin = async () => {
  const { data } = useQuery(Query.userDetail);

  const isUser = !!data?.userDetail;
  return isUser;
};
