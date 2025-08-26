import http from "../http-common";

class PlayerService {
  getAllPlayers() {
    return http.get("/players/getall");
  }

  addPlayer(data) {
    return http.post("/players/add", data);
  }

  updatePlayer(id, data) {
    return http.put(`/players/update/${id}`, data);
  }

  remove(id) {
  return http.delete(`/players/deletebyid/${id}`);
}
searchPlayersByName(name) {
    return http.get(`/players/search?name=${name}`);
  }
}

export default new PlayerService();
