export function calculation(data){
    return {type: 'Calculation',data}
}

export function fackbook(data){
    return {
        type: 'FaceBook',
        data
    }
}

export function getFacebook() {
    return function(dispatch){
        return fetch('https://facebook.github.io/react-native/movies.json').
        then(data => data.json()).
        then(data => dispatch(fackbook(data.movies)))
    }
}