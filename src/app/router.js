import Main from "../pages/Main";
import Login from "../pages/Login";
import Join from "../pages/Join";
import CardList from "../pages/CardList";
import Table from "../pages/Table";
import BoardList from "../pages/BoardList";
import BoardWrite from "../pages/BoardWrite";
import BoardView from "../pages/BoardView";

const RouteList = [
    {path : '/',        element :  <Main/>},
    {path : '/login',   element :  <Login/>},
    {path : '/join',   element :  <Join/>},
    {path : '/cardList',   element :  <CardList/>},
    {path : '/Table',   element :  <Table/>},
    {path : '/BoardList',   element :  <BoardList/>},
    {path : '/BoardView',   element :  <BoardView/>},
    {path : '/BoardWrite',   element :  <BoardWrite/>},

]

export default RouteList;
