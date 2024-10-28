# 포스트 업로드 시 액션 흐름

```mermaid
graph LR
    A[ADD_POST_REQUEST] --> B[ADD_POST_SUCCESS]
    A --> C[ADD_POST_FAILURE]
    
    B --> D[ADD_POST_TO_ME_REQUEST]
    D --> E[ADD_POST_TO_ME_SUCCESS]
    D --> F[ADD_POST_TO_ME_FAILURE]

    F --> H[DELETE_LATEST_POST_REQUEST]
    H --> I[DELETE_LATEST_POST_SUCCESS]
    H --> J[DELETE_LATEST_POST_FAILURE]