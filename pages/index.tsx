import React, {FunctionComponent} from 'react';

interface OwnProps {
}

type Props = OwnProps;

const Home: FunctionComponent<Props> = (props) => {

	return (
		<div>
			<div>
				Home
			</div>
			<style jsx global>
				{`
					html, body {
						padding: 0;
						margin: 0;
					}
			`}
			</style>
		</div>
	);
};

export default Home;