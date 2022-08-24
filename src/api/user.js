export default (client) => ({
  // FIXME: Should user and team endpoints put under
  fetchResearchers: (data) => client.get(`/api/user/search?param=${data}`),
  fetchAllTeams: ({ id }) => client.get(`/api/user/${id}/team?all=true`),
  fetchTeams: ({ id }) => client.get(`/api/user/${id}/team`),
  fetchAcceptedTeams: ({ id }) =>
    client.get(`/api/user/${id}/team?accepted=true`),
  userLogin: (data) => client.post("/api/user/login", data),
  userRegister: (data) => client.post("/api/user", data),
});
