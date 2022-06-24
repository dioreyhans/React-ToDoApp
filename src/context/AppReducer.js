export default (state, action)=>{
    switch(action.tipe ){
        case "CREATE_LIST":
        return {
            lists: [action.muatan, ...state.lists]

        }
        case "UPDATE_LIST":
            const editList = action.muatan;
            const editLists = state.lists.map(list=>{
                if(list.id === editList.id){
                    return editList;  
                }else{
                    return list;
                }
            })
        return{
            lists:editLists
        }
        case "DELETE_LIST":
        return {
            lists: state.lists.filter(list=>{
                return list.id!==action.muatan;
            })

        }
              
        default:
            return state
    }
}