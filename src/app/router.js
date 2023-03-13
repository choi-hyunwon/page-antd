import Main from "../pages/Main";
import Login from "../pages/Login";
import CardList from "../pages/CardList";
import Table from "../pages/Table";
import BoardList from "../pages/BoardList";
import BoardWrite from "../pages/BoardWrite";
import BoardView from "../pages/BoardView";

const RouteList = [
    {path : '/',        element :  <Main/>},
    {path : '/login',   element :  <Login/>},
    {path : '/cardList',   element :  <CardList/>},
    {path : '/Table',   element :  <Table/>},
    // {path : '/board',   element :  <Board/>,
    //     children: [
    //         {path : '/write',   element :  <BoardWrite/>},
    //     ],
    // },
    {path : '/BoardList',   element :  <BoardList/>},
    // {path : '/BoardWrite',   element :  <BoardWrite/>},
    // {path : '/BoardView',   element :  <BoardView/>},

]

export default RouteList;
