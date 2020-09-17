import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';

function Search({owner = "", name = ""}) {
  const [state, setState] = useState({owner, name});
  let history = useHistory();

  return (
    <Form inline>
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
        disabled={!state.owner || !state.name} className="mb-2"
        onClick={() => history.replace(`/${state.owner}/${state.name}/`)}
        data-testid="search-form-submit-button-test-id"
      >
        Go
      </Button>
    </Form>
  )
    ;
}

export default Search;
