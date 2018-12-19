export default {
    ADD_TYPOGRAPHY: (state, typographyitem) => {
        state.typographylist.push( {'size' : typographyitem} );
    },
    REMOVE_TYPOGRAPHY: (state, index) => {
        state.typographylist.splice( index, 1 );
    }
};
