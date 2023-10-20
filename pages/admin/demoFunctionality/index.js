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
import { TagsInput } from "react-tag-input-component";
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css'
import { useRouter } from "next/router";
import Select from 'react-select';
import DataTable from "react-data-table-component";

export const style = {
    width: 40,
    height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
export default function demoFunc() {
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])

    const [name, setname] = useState('')
    const [shortText, setshortText] = useState('')
    const [demoId, setdemoId] = useState('')
    const [keywords, setkeywords] = useState([])
    const [metaDescription, setmetaDescription] = useState('')
    const [imgFile, setImageFile] = useState("");



    const fetchData = async () => {
        try {
            const response = await axios.get('/api/demo');
            if (response.status === 200) {
                const demos = []
                response.data.forEach(element => {
                    var value = element.demo_id
                    var label = element.demo_name
                    demos.push({ value, label })
                });
                setdata(demos)
            }
        } catch (error) {
            console.error('Data fetching failed:', error);
        }
    }

    const fetchData2 = async () => {
        try {
            const response = await axios.get('/api/demofunc');
            if (response.status === 200) {
                setdata2(response.data);
            }
        } catch (error) {
            console.error('Data fetching failed:', error);
        }
    }

    useEffect(() => {
        fetchData();
        fetchData2()
    }, []);

    const handleChangeStatus = ({ meta, file }, status) => {
        setImageFile(file);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`/api/demofunc?id=${id}`);
            if (response.status === 200) {
                fetchData2();
            }
        } catch (error) {
            console.error('Deletion failed:', error);
        }
    }

    const Services_Columns = [
        {
            name: "Image",
            selector: (row) => row.Image,
            sortable: true,
            center: true,
        },
        {
            name: "Name",
            selector: (row) => row.Name,
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

    const Services_Data = data2.map((elem) => {
        return {
            Image: <img src={`/uploads/${elem.demo_func_img}`} height={80} width={80} />,
            Name: `${elem.demo_func_name}`,
            action: (
                <div>
                    <span>
                        <Button
                            onClick={() => handleDelete(elem.demo_func_id)}
                            className="btn btn-danger btn-xs"
                            style={style2}
                        >
                            Delete
                        </Button>
                    </span>{" "}
                    {/* &nbsp;&nbsp; */}
                    {/* <span>
                        <Button
                            // onClick={() => handleEdit(elem)}
                            className="btn btn-success btn-xs"
                            style={style2}
                        >
                            Edit{" "}
                        </Button>
                    </span> */}
                </div>
            ),
        };
    });

    const handleAdd = () => {
        if (!name) {
            return showError("enter the name");
        }
        if (!shortText) {
            return showError("enter the short text");
        }
        if (!demoId) {
            return showError("select the demo");
        }
        if (!imgFile) {
            return showError("select the image");
        }
        if (!metaDescription) {
            return showError("enter the meta description");
        }
        if (keywords.length == 0) {
            return showError("enter the meta keywords");
        }

        function showError(fieldName) {
            return alert(`Please ${fieldName}`)
        }
        // setisLoading(true)
        const formData = new FormData();
        formData.append("demo_func_name", name);
        formData.append("demo_func_shortText", shortText);
        formData.append("demo_id", demoId.value);
        formData.append("demo_func_keywords", JSON.stringify(keywords));
        formData.append("demo_func_metaDesc", metaDescription);
        formData.append("demoImg", imgFile);

        axios.post(`/api/demofunc`, formData)
            .then((response) => {
                alert("Added Successfully")
                setname('')
                setshortText('')
                setdemoId("")
                setkeywords([])
                setmetaDescription("")
                setImageFile("")
                fetchData2()
            }).catch((err) => {
                console.log(err)
                // setisLoading(false)
            })
    }
    return (
        <div style={{ backgroundColor: "#F5F7FB", padding: "50px" }}>
            <Fragment>
                <h3>Add Demo Functionality</h3>
                <Container fluid={true}>
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
                                            <Col md={"6"}>
                                                <FormGroup>
                                                    <Label>{"Demo"}</Label>
                                                    <Select
                                                        options={data}
                                                        onChange={e => setdemoId(e)}
                                                        className="js-example-basic-single col-sm-12"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <Label>Keywords</Label>
                                                <TagsInput
                                                    value={keywords}
                                                    onChange={setkeywords}
                                                    placeHolder="Enter Keywords"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Label>MetaDescription</Label>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter Description"
                                                    value={metaDescription}
                                                    onChange={(e) => setmetaDescription(e.target.value)}
                                                    required
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col>
                                                <FormGroup>
                                                    <Label>{"Image"}</Label>
                                                    <Dropzone
                                                        onChangeStatus={handleChangeStatus}
                                                        maxFiles={1}
                                                        multiple={false}
                                                        canCancel={false}
                                                        inputContent="Drop A File"
                                                        styles={{
                                                            dropzone: { width: "100%", minHeight: 50, overflow: "auto" },
                                                            dropzoneActive: { borderColor: "green" },
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <FormGroup className="mb-0">
                                                    <Button
                                                        onClick={handleAdd}
                                                        className="me-3"
                                                        color="success"
                                                    >
                                                        {"Submit"}
                                                    </Button>
                                                </FormGroup>
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
                <Container fluid={true} style={{ marginTop: "100px" }}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader className="pb-0">
                                    <h5>{"Demo Functionality List"}</h5>
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
