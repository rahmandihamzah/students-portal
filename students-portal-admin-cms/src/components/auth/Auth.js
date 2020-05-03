import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "../../store/actionCreators/loginAction";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

// components
import Login from "./Login";

function Auth() {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.loginReducer.loginStatus);

  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    if (localStorage.getItem("access_token")) dispatch(setLoginStatus(true));
    if (loginStatus) history.push("/");
  }, [history, loginStatus, dispatch]);

  return (
    <div className="flex border grid grid-cols-4 min-h-screen">
      <div className="border flex justify-center items-center">
        <Nav tabs className="grid grid-cols-2">
          <div>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}>
                Tab1
              </NavLink>
            </NavItem>
          </div>
          <div>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}>
                Moar Tabs
              </NavLink>
            </NavItem>
          </div>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
      <div className="border col-start-2 col-end-5 flex items-center justify-center">
        <h1>Auth page</h1>
      </div>
      {/* <div className="border flex justify-center items-center">
        <Login />
      </div>
      <div className="border col-start-2 col-end-5 flex items-center justify-center">
        <h1>Auth page</h1>
      </div> */}
    </div>
  );
}

export default Auth;
