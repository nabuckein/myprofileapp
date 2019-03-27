const UPDATE_MAIN_CONTENT = 'mainContent:updateMainContent';
export default UPDATE_MAIN_CONTENT;

export function updateMainContent(newContent){
    return ({
        type: UPDATE_MAIN_CONTENT,
        payload: {
            mainContent:newContent
        }
    });
}