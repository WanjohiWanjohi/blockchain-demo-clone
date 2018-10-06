import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Block from './Block';
import { addBlock } from '../actionCreators';

export function Blockchain(props) {
	const { blocks, dispatch } = props;
	return (
		<div>
			{blocks.map(block => (
				<Block key={block.hash} block={block} />
			))}
			<button
				type="button"
				onClick={() => dispatch(addBlock())}
			>
				Yo
			</button>
		</div>
	);
}
Blockchain.propTypes = {
	blocks: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	blocks: state,
});

export default connect(mapStateToProps)(Blockchain);