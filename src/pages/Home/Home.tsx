import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Board from './components/Board/Board';
import './home.scss';
import { IBoard } from '../../common/interfaces/IBoard';
import { getBoards } from '../../store/modules/boards/actions';
import CreateBoard from './components/CreateBoard/CreateBoard';

type PropsType = {
  boards: IBoard[];
  pullBoards: () => Promise<void>;
};

type StateType = {
  boards: IBoard[];
  visible: boolean;
};

class Home extends React.Component<PropsType, StateType> {
  async componentDidMount() {
    const { pullBoards } = this.props;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ visible: false });
    await pullBoards();
  }

  render() {
    const { boards } = this.props;
    const { visible } = this.state || '';
    // eslint-disable-next-line no-console
    console.log(visible);
    let boardsList: JSX.Element[] = [];
    if (boards && boards.length > 0) {
      boardsList = boards.map((board) => (
        <Link to={`/board/${board.id}`} key={board.id}>
          <Board title={board.title} />
        </Link>
      ));
    }

    return (
      <div className="home-container">
        <h1>Мои доски</h1>
        <div className="boards-container">
          {boardsList}
          <a className="add-board">
            <FontAwesomeIcon icon={faAdd} />
            <span>Добавить доску</span>
          </a>
          <CreateBoard {...visible} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: StateType) => ({
  ...state.boards,
});
export default connect(mapStateToProps, { pullBoards: getBoards })(Home);
