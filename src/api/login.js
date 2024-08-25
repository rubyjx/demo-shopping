import request from "@/utils/request";
export const codeLogin = (username, password) => {
  return request.post("/api/login", {
    username: username,
    password: password,
  });
};
