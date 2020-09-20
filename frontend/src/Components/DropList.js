import React from "react";
import { Card } from "react-bootstrap";
import { Droppable, Draggable } from "react-beautiful-dnd";

function DropList(props) {
  const { name, list, setUserId, showModal } = props;

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    margin: `0 0 15px 0`,
    ...draggableStyle,
  });

  const showUserInfo = (id) => {
    setUserId(id);
    showModal(true);
  };

  return (
    <Droppable droppableId={name}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="drop"
        >
          {list.map((user, i) => (
            <Draggable
              draggableId={`${name}-${i}`}
              key={`${name}-${i}`}
              index={i}
            >
              {(provided) => (
                <Card
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}
                  onDoubleClick={(e) => showUserInfo(user.id)}
                >
                  <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      email: {user.email}
                    </Card.Subtitle>
                    <Card.Text>city: {user.address.city}</Card.Text>
                    <Card.Link href={user.website}>{user.website}</Card.Link>
                  </Card.Body>
                </Card>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default DropList;
