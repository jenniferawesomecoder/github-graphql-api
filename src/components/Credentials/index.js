import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const Credentials = () => {
    const [github, setGithub] = useState('');
    const [libraries, setLibraries] = useState('');

    useEffect(() => {
        const githubKey = localStorage.getItem('github-access-key') || '';
        const librariesKey = localStorage.getItem('libraries-access-key') || '';

        setGithub(githubKey);
        setLibraries(librariesKey);
    }, [])

    const handleGithubChange = (e) => {
        const value = e.target.value;
        setGithub(value);
    }
    
    const handleLibrariesChange = (e) => {
        const value = e.target.value;
        setLibraries(value);
    }
    
    const handleSubmit = () => {
        localStorage.setItem('github-access-key', github);
        localStorage.setItem('libraries-access-key', libraries);        
    }

    return (
        <Form inline onSubmit={handleSubmit}>
            <Form.Control
                type="text"
                className="mb-2 mr-sm-2"
                placeholder="Github Access Key"
                value={github}
                onChange={handleGithubChange}
            />

            <Form.Control
                type="text"
                className="mb-2 mr-sm-2"
                placeholder="Libraries Access Key"
                value={libraries}
                onChange={handleLibrariesChange}
            />
            <Button
                type="submit"
                disabled={!github || !libraries} className="mb-2"
            >
                SET KEYS
            </Button>
        </Form>
    )
}

export default Credentials;