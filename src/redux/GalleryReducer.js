import Featured from '../components/Projects/Featured';

const initialState = {
    projectObject: Featured.imageArray
};

const GalleryReducer = (state = initialState, action) => {

    let projCopy = [...initialState.projectObject];
    let newState = { ...state };

    switch (action.type) {
        case ACTION_TYPE_FILTER:
            let filteredArray = projCopy.filter(function (proj) {
                let searchValue = proj.category;
                return searchValue.indexOf(action.value) !== -1;
            });
            newState.projectObject = filteredArray;
            // console.log("newstate_FILTER: ", JSON.stringify(newState.projectObject));
            return newState;
    }
    return newState;
};

export default GalleryReducer;