import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Game} from "./components/game/game";
import Chess from 'chess.js';


const chess = new Chess();

ReactDOM.render(<Game chess={chess} />, document.getElementById('root'));
registerServiceWorker();
