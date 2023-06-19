import { reactive } from "vue";
import axios from 'axios';

export const store = reactive({
    apiUrl: 'http://localhost:8000/api',
    imgBasePath: 'http://127.0.0.1:8000/storage/'
});