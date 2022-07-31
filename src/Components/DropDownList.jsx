const DropListComments = () => {
  return (
    <div className="sortby-container">
      <div className="sortby-container-items">
        <select>
          <option value="title">Title</option>
          <option value="created_at">Posted</option>
          <option value="topics">Topics</option>
          <option value="votes">Votes number</option>
        </select>
      </div>
      <div>
        <button className="sortby-container-items">Sort by</button>
      </div>
    </div>
  );
};

export default DropListComments;
