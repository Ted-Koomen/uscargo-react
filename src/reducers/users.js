
const initialState = [
    {
        userName: 'teddy',
        password:'teddy',
        redirect: false,
        errors: [],
        accessToken: 'teddy'
    }
]
export default function users(state = initialState, action) {
    switch(action.type){
        case "ADD_USER":
          console.log(action.text)
        default:
            return {
                ...state
            }
    }
   
}
