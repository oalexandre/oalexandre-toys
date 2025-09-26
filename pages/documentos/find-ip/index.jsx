import { Box, Typography } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/findIp/Screens";

const TodoList = () => {
  return (
    <TodoStateProvider>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SEO
          description="Saiba o seu ip local"
          title="Meu IP"
          url="/seguranca/find-ip"
          imageUrl="/todo-list.png"
        />

        <Screen />
      </Box>
    </TodoStateProvider>
  );
};

export default TodoList;
