import React, { useState } from "react";
import asni_sever from "../api/asni_server";
export default () => {
  const [games, setGames] = useState([]);
  const [loader, setLoader] = useState(false);
  const getGames = async (game_id) => {
    try {
      setLoader(true);
      const res = await asni_sever.get(`myapi/${game_id}`);
      setGames(res.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  };
  return [];
};
