import React, { useState } from "react";
// reactstrap components
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
} from "reactstrap";

import BannerHeader from "components/Headers/BannerHeader";
import TabArea from "views/TabArea";
import HotelForm from "./HotelForm";
import HotelRoomForm from "./HotelRoomForm";
const HotelTab = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabs =[
    {id:"1",name:"Add",icon:"fas fa-plus-square text-green",visible: true},
    {id:"2",name:"Room",icon:"fas fa-edit text-green",visible: true}
]
  const actions =[
    {icon:(<i class="fas fa-eye"></i>) ,path:"/app/hotel-view",name:"View Hotel List"},
]


  return (
    <>
      <BannerHeader actions={actions} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="nav-item order-xl-1" xl="12">
            <TabArea tabss={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
              <HotelForm /> {/* //Adding Hotel */}   
              </TabPane>
              <TabPane tabId="2">
                <HotelRoomForm/>
              </TabPane>
             
            </TabContent>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HotelTab;
