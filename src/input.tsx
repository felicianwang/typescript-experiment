import * as React from 'react';
import styled from 'styled-components';

interface Props { type: string, color: string; }
export default class Input extends React.Component<Props, {}> {
	render() {
		return <div><InputComponent type={this.props.type} placeholder="A small text input" color={this.props.color}/></div>;
	}
}

const InputComponent = styled.input`
	color: ${props => props.color || "palevioletred"};
	font-size: 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;

	margin: "1em",
	padding: "1em"
`;
