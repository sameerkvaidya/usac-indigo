export default {
    props: {
        columns: { type: Array, required: true },
        data: { type: Array, required: true }, // rows
        total: { type: Number, required: true },
        query: { type: Object, required: true },
        paginated: Boolean
    }
}