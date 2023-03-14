import Main from "../samples/Main";
import Login from "../samples/Login";
import Join from "../samples/Join";
import CardList from "../samples/CardList";
import Table from "../samples/Table";
import BoardList from "../samples/BoardList";
import BoardWrite from "../samples/BoardWrite";
import BoardView from "../samples/BoardView";

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
