import React from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText, Card} from 'reactstrap';
import "./search.css";

const Search = (props) => {
    return (
        <section id="back">
            <Container id="jumboText">
                <Card id="cardBack">    
                <h2 className="text-center text-primary">
                    Welcome to Skill-Trade!
                </h2>
                <Form>
                    <FormGroup>
                        {/* <Label for="search" id="label">Search</Label> */}
                        <Input type="text" name="search" id="search" placeholder="Search Listings" large className = "text-center"/>
                    </FormGroup>
                    <Button id="btn">Submit</Button>
                </Form>
                </Card>
            </Container>
        </section>
    );
};

export default Search;