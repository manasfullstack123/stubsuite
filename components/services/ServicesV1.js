import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Row, Col, Nav, Dropdown } from "react-bootstrap";
import SectionComp from "./SectionComp";
import SubSectionComp from "./SubSectionComp";
export default function ServicesV1() {
  const [loading, setLoading] = useState(true);
  const [sectionState, setSectionState] = useState([]);
  const [categoryState, setCategoryState] = useState([]);
  const [servicesState, setServicesState] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);

  const [demo, setdemo] = useState([])
  const [demoFunc, setdemoFunc] = useState([])
  const [selectedDemo, setselectedDemo] = useState([])
  // const { currentMode, currentColor } = useStateContext();
  const [currentMode, setcurrentMode] = useState('Light')
  const [currentColor, setcurrentColor] = useState({ name: 'wine', color: '#7B0000', isColor: '#DA0909' })

  useEffect(() => {
    Promise.all([
      axios.get(`https://lms.unialsolutions.com/services/section`),
      axios.get(`https://lms.unialsolutions.com/service/category`),
      axios.get(`https://lms.unialsolutions.com/services`),
    ])
      .then((responses) => {
        // console.log(responses[2]?.data);
        setSectionState(responses[0]?.data);
        setCategoryState(responses[1]?.data);
        setServicesState(responses[2]?.data);
        setLoading(false);
      })
      .catch((error) => error);

    axios.get(`/api/demo`)
      .then((response) => {
        setdemo(response.data)
      }).catch((err) => {
        console.log(err)
      })

    axios.get(`/api/demofunc`)
      .then((response) => {
        setdemoFunc(response.data)
        setselectedDemo([response.data[0]])
      }).catch((err) => {
        console.log(err)
      })
  }, []);

  const filterServices = (id) => {
    const demos = demoFunc.filter((x) => x?.demo_id == id);
    setselectedDemo(demos);
  };

  const cArr = [
    "first",
    "second",
    "third",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];
  return (
    <div>
      {loading ? null : (
        <div
          className="pimcore_area_services pimcore_area_content mt-5"
          id="ourServices"
        >
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            className="mt-5  a-services waypoint"
          >
            <div className="container">
              <div>
                <h2 className={`a-section__title h2 step-up 1`}>
                  <span
                    className={
                      currentMode === "Dark" ? "text-white" : "text-black"
                    }
                  >
                    Our Services
                  </span>
                </h2>
                <p className="icon-box-editable__description">
                  <span
                    className={
                      currentMode === "Dark" ? "text-white" : "text-black"
                    }
                  >
                    We work with you to achieve your goals with you.
                  </span>
                </p>
              </div>
              <div className="container show-on-mobile my-4">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{
                      backgroundColor: currentColor?.color,
                      border: currentMode === "Dark" ? `1px solid ${currentColor?.color}` : `1px solid ${currentColor?.color}`,
                    }}
                  >
                    <Dropdown.Item key={0} eventKey={cArr[0]}>
                      {demo[0]?.demo_name}
                    </Dropdown.Item>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`dropdownMenuSecton ${currentMode === "Dark" ? "bg-black shadow-dark-mode-opacity" : "bg-white"}`}>
                    {demo.map((s, index) => (
                      <Dropdown.Item
                        key={index}
                        eventKey={cArr[index]}
                        onClick={() => filterServices(s.demo_id)}
                      >
                        <span className={currentMode === "Dark" ? "text-white" : "text-black"}>{s.demo_name}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Row className={`container mt-5 d-flex a-services__tabs pb-3 step-in ${currentMode === "Dark" ? "bg-black shadow-dark-mode" : "bg-white"}`}>
                <Col className="a-services__tabs-container services-pager step-in-left col-md-4 order-md-0" style={{ background: currentColor?.color }}>
                  <Nav
                    variant="pills"
                    className="flex-column a-services__tabs-container-ul"
                  >
                    {/* {sectionState?.map((val, i) => (
                      <Nav.Link
                        eventKey={cArr[i]}
                        key={i}
                        className="a-services__tabs-label"
                      >
                        <p>{val.services_title}</p>
                      </Nav.Link>
                    ))} */}
                    {demo?.map((val, i) => (
                      <Nav.Link
                        eventKey={cArr[i]}
                        key={i}
                        onClick={() => filterServices(val.demo_id)}
                        className="a-services__tabs-label"
                      >
                        <p>{val.demo_name}</p>
                      </Nav.Link>
                    ))}
                  </Nav>
                </Col>
                <div className="a-services__content-block step-in-right col-md-7 p-0">
                  <Col className="a-services__content-container">
                    <Tab.Content className="a-services__content active">
                      {/* {sectionState?.map((val, i) => (
                        <Tab.Pane key={i} eventKey={cArr[i]}>
                          <h5 className={`a-services__name ${currentMode === "Dark" ? "text-white" : "text-black"}`}>
                            {val.services_title}
                          </h5>
                          <p className={`a-services__description ${currentMode === "Dark" ? "text-white" : "text-black"}`}>
                            {val.services_text}
                          </p>
                          <div>
                            {categoryState.map((val, i) => (
                              <SectionComp
                                imgSrc={val.category_image}
                                sId={val.category_id}
                                key={i}
                                link={`/services/${val.category_slugs}`}
                              />
                            ))}
                          </div>
                        </Tab.Pane>
                      ))} */}
                      {demo?.map((val, catIndex) => (
                        <Tab.Pane key={catIndex} eventKey={cArr[catIndex]}>
                          <h5 className={`a-services__name ${currentMode === "Dark" ? "text-white" : "text-black"}`}>
                            {val.demo_name}
                          </h5>
                          <p className={`a-services__description ${currentMode === "Dark" ? "text-white" : "text-black"}`}>
                            {val.demo_shortText}
                          </p>
                          <div>
                            {selectedDemo?.map((val, i) => (
                              <SubSectionComp
                                imgSrc={val.demo_func_img}
                                sId={val.demo_func_id}
                                slug={val.demo_func_name}
                                key={i}
                              />
                            ))}
                          </div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Col>
                </div>
              </Row>
            </div>
          </Tab.Container>
        </div>
      )}
    </div>
  )
}
