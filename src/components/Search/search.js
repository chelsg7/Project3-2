import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input, FormText, Card, CardHeader, CardBody} from 'reactstrap';
import "./search.css";

const Search = (props) => {
    return (
        <Container id="backSearch">
            <Card id="cardSearch">
                <CardHeader className="text-center text-primary">
                    <h1>
                        Welcome to Skill-Trade!
                    </h1>
                </CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup>
                            {/* <Label for="search" id="label">Search</Label> */}
                            <Input type="text" name="search" id="search" placeholder="Search Listings" large className = "text-center"/>
                        </FormGroup>
                        <Button id="btn">Submit</Button>
                    </Form>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Search;