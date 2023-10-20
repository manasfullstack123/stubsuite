import React, { Fragment, useState, useEffect } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
export const style = {
    width: 40,
    height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
export default function AddDemo() {
    const [name, setname] = useState('')
    const [shortText, setshortText] = useState('')
    const [getServicesList, setgetServicesList] = useState([]);
    const [demoId, setdemoId] = useState('')

    const handleClick = async () => {
        if (!name) {
            return alert("Enter the name")
        }
        if (!shortText) {
            return alert("Enter the short text")
        }

        const formData = {
            demo_name: name,
            demo_shortText: shortText
        }

        axios.post(`http://localhost:3000/api/demo`, formData)
            .then((response) => {
                setname("")
                setshortText("")
                fetchData()
                alert("Demo Added")
            }).catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/demo?id=${id}`);
            if (response.status === 200) {
                fetchData();
            }
        } catch (error) {
            console.error('Deletion failed:', error);
        }
    }

    const Services_Columns = [
        {
            name: "Name",
            selector: (row) => row.Name,
            sortable: true,
            center: true,
        },
        {
            name: "Short Text",
            selector: (row) => row.ShortText,
            sortable: true,
            center: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
            sortable: true,
            center: true,
        },
    ];

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/demo');
            if (response.status === 200) {
                setgetServicesList(response.data);
            }
        } catch (error) {
            console.error('Data fetching failed:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const Services_Data = getServicesList.map((elem) => {
        return {
            Name: `${elem.demo_name}`,
            ShortText: `${elem.demo_shortText}`,
            action: (
                <div>
                    <span>
                        <Button
                            onClick={() => handleDelete(elem.demo_id)}
                            className="btn btn-danger btn-xs"
                            style={style2}
                        >
                            Delete
                        </Button>
                    </span>{" "}
                    {/* &nbsp;&nbsp; */}
                    <span>
                        <Button
                            onClick={() => handleEdit(elem)}
                            className="btn btn-success btn-xs"
                            style={style2}
                        >
                            Edit{" "}
                        </Button>
                    </span>
                </div>
            ),
        };
    });

    const handleEdit = (elem) => {
        setname(elem.demo_name)
        setshortText(elem.demo_shortText)
        setdemoId(elem.demo_id)
    }

    const handleUpdate = async () => {
        if (!name) {
            return alert("Enter the name")
        }
        if (!shortText) {
            return alert("Enter the short text")
        }
        try {
            const response = await axios.put('/api/demo', {
                demo_name: name,
                demo_shortText: shortText,
                demo_id: demoId,
            });
            if (response.status === 200) {
                fetchData();
                setdemoId("")
                setname("")
                setshortText("")
                alert("Updated Successfully")
            }
        } catch (error) {
            console.error('Update failed:', error);
        }
    }
    return (
        <div style={{ backgroundColor: "#F5F7FB", height: "100vh", padding: "50px" }}>
            <Fragment>
                <Container fluid={true}>
                    <h3>Add Demo</h3>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardBody>
                                    <Form
                                        className="theme-form"
                                        method="POST"
                                    >
                                        <Row>
                                            <Col md={"6"}>
                                                <FormGroup>
                                                    <Label>{"Name"}</Label>
                                                    <Input
                                                        onChange={(e) => setname(e.target.value)}
                                                        value={name}
                                                        type="text"
                                                        className="form-control digits"
                                                        required
                                                        placeholder="e.g: Blockchain Development"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={"6"}>
                                                <FormGroup>
                                                    <Label>{"Short Text"}</Label>
                                                    <Input
                                                        onChange={(e) => setshortText(e.target.value)}
                                                        value={shortText}
                                                        type="text"
                                                        className="form-control digits"
                                                        required
                                                        placeholder="Enter Text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                {
                                                    demoId ?
                                                        <Button
                                                            onClick={handleUpdate}
                                                            className="me-3"
                                                            color="success"
                                                        >
                                                            {"Update"}
                                                        </Button>
                                                        :
                                                        <Button
                                                            onClick={handleClick}
                                                            className="me-3"
                                                            color="success"
                                                        >
                                                            {"Submit"}
                                                        </Button>
                                                }
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

            <Fragment>
                {/* <h3 style={{ marginTop: "100px" }}>Demo List</h3> */}
                <Container fluid={true} style={{ marginTop: "100px" }}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader className="pb-0">
                                    <h5>{"Demo List"}</h5>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive product-table">
                                        <DataTable
                                            noHeader
                                            pagination
                                            paginationServer
                                            columns={Services_Columns}
                                            data={Services_Data}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        </div>
    )
}
