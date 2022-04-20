/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Board from './components/Board/Board';
import './home.scss';
import { IBoard } from '../../common/interfaces/IBoard';
import { getBoards } from '../../store/modules/boards/actions';

const state2 = {
  boards: [
    { id: 1, title: 'покупки' },
    { id: 2, title: 'подготовка к свадьбе' },
    { id: 3, title: 'разработка интернет-магазина' },
    { id: 4, title: 'курс по продвижению в соцсетях' },
  ],
};

type PropsType = {
  boards: IBoard[];
  getBoards: () => Promise<void>;
};

type StateType = {
  boards: IBoard[];
};

class Home extends React.Component<PropsType, StateType> {
  boards2 = state2.boards.map((board) => (
    <Link to={`/board/${board.id}`} key={board.id}>
      <Board title={board.title} />
    </Link>
  ));

  async componentDidMount() {
    await this.props.getBoards();
  }

  render() {
    return (
      <div className="home-container">
        <h1>Мои доски</h1>
        <div className="boards-container">
          {this.boards2}
          <a className="add-board">
            <FontAwesomeIcon icon={faAdd} />
            <span>Добавить доску</span>
          </a>
        </div>
        <div>{JSON.stringify(this.props.boards)}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: StateType) => ({
  ...state.boards,
});
export default connect(mapStateToProps, { getBoards })(Home);
