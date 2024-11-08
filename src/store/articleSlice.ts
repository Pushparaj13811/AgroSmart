import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as articleApi from "../api/articleApi";
import { Article, ArticleState } from "../types/types";

const initialState: ArticleState = {
    articles: [],
    selectedArticle: null,
    status: "idle",
    error: null,
};

// Async actions
export const articleActions = {
    getAllArticles: createAsyncThunk<Article[]>("articles/getAllArticles", async () => await articleApi.getAllArticles()),
    getArticleById: createAsyncThunk<Article, string>("articles/getArticleById", async (id) => await articleApi.getArticle(id)),
    createArticle: createAsyncThunk<Article, Article>("articles/createArticle", async (article) => await articleApi.createArticle(article)),
    updateArticle: createAsyncThunk<Article, Article>("articles/updateArticle", async (article) => {
        if (!article.id) {
            throw new Error('Article ID is required');
        }
        return await articleApi.updateArticle(article, article.id);
    }),
    deleteArticle: createAsyncThunk<string, string>("articles/deleteArticle", async (id) => {
        await articleApi.deleteArticle(id);
        return id; // Returning the article id directly
    }),
};

// Slice
const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("articles/") && action.type.endsWith("/pending"),
                (state) => {
                    state.status = "loading";
                    state.error = null;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Article[]> => action.type === "articles/getAllArticles/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.articles = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Article> => action.type === "articles/getArticleById/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.selectedArticle = action.payload;
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Article> => action.type === "articles/createArticle/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.articles.push(action.payload);
                }
            )
            .addMatcher(
                (action): action is PayloadAction<Article> => action.type === "articles/updateArticle/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    const index = state.articles.findIndex((article) => article.id === action.payload.id);
                    if (index !== -1) {
                        state.articles[index] = action.payload;
                    }
                }
            )
            .addMatcher(
                (action): action is PayloadAction<string> => action.type === "articles/deleteArticle/fulfilled",
                (state, action) => {
                    state.status = "succeeded";
                    state.articles = state.articles.filter((article) => article.id !== action.payload);
                }
            )
            .addMatcher(
                (action): action is PayloadAction<unknown> => action.type.startsWith("articles/") && action.type.endsWith("/rejected"),
                (state, action: any) => {
                    state.status = "failed";
                    state.error = action.error?.message || "Something went wrong";
                }
            )
})

export default articleSlice.reducer;
