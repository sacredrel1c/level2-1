import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import List from './components/List/List';
import './components/Board/board.scss';
import { IList } from '../../common/interfaces/IList';
import { getLists } from '../../store/modules/board/actions';

type PropsType = {
  lists: IList[];
  pullLists: () => Promise<void>;
};

type StateType = {
  lists: IList[];
};

class Board extends React.Component<PropsType> {
  async componentDidMount() {
    const { pullLists } = this.props;
    await pullLists();
  }

  render() {
    const { lists } = this.props;
    let listsLists: JSX.Element[] = [];
    if (lists && lists.length > 0) {
      listsLists = lists.map((list) => <List title={list.title} cards={list.cards} key={list.id} />);
    }

    return (
      <div>
        <div className="board-container">
          <div className="board-container-row">
            {listsLists}
            <a className="add-list">
              <FontAwesomeIcon icon={faAdd} />
              <span>Добавить список</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: StateType) => ({
  ...state.lists,
});
export default connect(mapStateToProps, { pullLists: getLists })(Board);
