import React, { useState, useEffect } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input placeholder="Github Access Key" value={github} onChange={handleGithubChange} />
            <input placeholder="Libraries Access Key" value={libraries} onChange={handleLibrariesChange}/>
            <button type="submit">SET KEYS</button>
        </form>
    )
}

export default Credentials;