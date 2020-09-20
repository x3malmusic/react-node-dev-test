import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DropList from "../Containers/DropList";

function CardPlaceholder(props) {
  const { list, setList, loggedIn } = props;

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        list[source.droppableId],
        source.index,
        destination.index
      );

      setList[source.droppableId](items);
    } else if (loggedIn) {
      const result = move(
        list[source.droppableId],
        list[destination.droppableId],
        source,
        destination
      );

      setList[source.droppableId](result[source.droppableId]);
      setList[destination.droppableId](result[destination.droppableId]);
    }
  };

  return (
    <div className="placeholder">
      <DragDropContext onDragEnd={onDragEnd}>
        <DropList name="usersList" list={list["usersList"]} />
        <DropList name="savedList" list={list["savedList"]} />
      </DragDropContext>
    </div>
  );
}

export default CardPlaceholder;
