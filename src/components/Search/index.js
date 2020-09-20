import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';

function Search({owner = "", name = ""}) {
  const [state, setState] = useState({owner, name});
  let history = useHistory();

  const githubKeys = localStorage.getItem('github-access-key');
  const librariesKeys = localStorage.getItem('libraries-access-key');

  if (!githubKeys || !librariesKeys) {
    return (
      <em className="white-color">Please Provide the Keys</em>
    )
  }

  return (
    <Form inline onSubmit={() => history.replace(`/${state.owner}/${state.name}/`)}>
      <Form.Label srOnly>
        Owner
      </Form.Label>
      <Form.Control
        type="text"
        className="mb-2 mr-sm-2"
        placeholder="Owner"
        value={state.owner}
        onChange={evt => setState({...state, owner: evt.currentTarget.value.trim()})}
        data-testid="search-form-owner-field-test-id"
      />
      <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
        Repository name
      </Form.Label>
      <Form.Control
        type="text"
        className="mb-2 mr-sm-2"
        placeholder="Repository name"
        value={state.name}
        onChange={evt => setState({...state, name: evt.currentTarget.value.trim()})}
        data-testid="search-form-name-field-test-id"
      />
      <Button
        type="submit"
        disabled={!state.owner || !state.name} className="mb-2"
        data-testid="search-form-submit-button-test-id"
      >
        Go
      </Button>
    </Form>
  )
    ;
}

export default Search;
