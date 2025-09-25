/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface PluginUploadFileDocument {
  /**
   * The document ID, represented by a UUID
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  documentId: string;
  id: number;
  /** A string field */
  name: string;
  /** A string field */
  alternativeText?: string;
  /** A string field */
  caption?: string;
  /**
   * An integer field
   * @min -9007199254740991
   * @max 9007199254740991
   */
  width?: number;
  /**
   * An integer field
   * @min -9007199254740991
   * @max 9007199254740991
   */
  height?: number;
  /** A JSON field */
  formats?: any;
  /** A string field */
  hash: string;
  /** A string field */
  ext?: string;
  /** A string field */
  mime: string;
  /** A decimal field */
  size: number;
  /** A string field */
  url: string;
  /** A string field */
  previewUrl?: string;
  /** A string field */
  provider: string;
  /** A JSON field */
  provider_metadata?: any;
  /** A datetime field */
  createdAt?: string;
  /** A datetime field */
  updatedAt?: string;
  /**
   * A datetime field
   * @default "2025-09-25T16:26:00.840Z"
   */
  publishedAt: string;
  related: any;
}

export interface ApiCategoryCategoryDocument {
  /**
   * The document ID, represented by a UUID
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  documentId: string;
  id: number;
  /** A string field */
  name: string;
  /** A UID field */
  slug: string;
  /** A text field */
  description?: string;
  /** A datetime field */
  createdAt?: string;
  /** A datetime field */
  updatedAt?: string;
  /**
   * A datetime field
   * @default "2025-09-25T16:26:00.841Z"
   */
  publishedAt: string;
  /** A string field */
  locale?: string;
  /** A relational field */
  posts?: ApiPostPostDocument[];
  /** A relational field */
  localizations?: ApiCategoryCategoryDocument[];
}

export interface ApiTagTagDocument {
  /**
   * The document ID, represented by a UUID
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  documentId: string;
  id: number;
  /** A string field */
  name: string;
  /** A UID field */
  slug: string;
  /** A datetime field */
  createdAt?: string;
  /** A datetime field */
  updatedAt?: string;
  /**
   * A datetime field
   * @default "2025-09-25T16:26:00.842Z"
   */
  publishedAt: string;
  /** A string field */
  locale?: string;
  /** A relational field */
  posts?: ApiPostPostDocument[];
  /** A relational field */
  localizations?: ApiTagTagDocument[];
}

export interface ApiPostPostDocument {
  /**
   * The document ID, represented by a UUID
   * @format uuid
   * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
   */
  documentId: string;
  id: number;
  /** A string field */
  title: string;
  /** A UID field */
  slug: string;
  /** A richtext field */
  content?: string;
  /** A text field */
  excerpt?: string;
  /** A datetime field */
  createdAt?: string;
  /** A datetime field */
  updatedAt?: string;
  /**
   * A datetime field
   * @default "2025-09-25T16:26:00.839Z"
   */
  publishedAt: string;
  /** A string field */
  locale?: string;
  /** A media field */
  cover?: PluginUploadFileDocument;
  /** A relational field */
  categories?: ApiCategoryCategoryDocument[];
  /** A relational field */
  tags?: ApiTagTagDocument[];
  /** A relational field */
  localizations?: ApiPostPostDocument[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title @drovovoz/backend
 * @version 0.1.0
 *
 * API documentation for @drovovoz/backend v0.1.0
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags upload
   * @name UploadPost
   * @request POST:/
   */
  uploadPost = (
    query?: {
      /**
       * @exclusiveMin 0
       * @max 9007199254740991
       */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<
      | {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          width?: number;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          height?: number;
          formats?: Record<string, any>;
          hash: string;
          ext?: string;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          folder?: number;
          folderPath: string;
          provider: string;
          provider_metadata?: Record<string, any> | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: number;
          updatedBy?: number;
        }
      | {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          width?: number;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          height?: number;
          formats?: Record<string, any>;
          hash: string;
          ext?: string;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          folder?: number;
          folderPath: string;
          provider: string;
          provider_metadata?: Record<string, any> | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: number;
          updatedBy?: number;
        }[],
      void
    >({
      path: `/`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  categories = {
    /**
     * No description
     *
     * @tags category
     * @name CategoryGetCategories
     * @request GET:/categories
     */
    categoryGetCategories: (
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        _q?: string;
        /** Pagination parameters */
        pagination?: {
          /** Include total count in response */
          withCount?: boolean;
        } & (
          | {
              /**
               * Page number (1-based)
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              page: number;
              /**
               * Number of entries per page
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              pageSize: number;
            }
          | {
              /**
               * Number of entries to skip
               * @min 0
               * @max 9007199254740991
               */
              start: number;
              /**
               * Maximum number of entries to return
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              limit: number;
            }
        );
        /** Sort the result */
        sort?:
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A text field */
            description?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.837Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiCategoryCategoryDocument[];
          }[];
        },
        void
      >({
        path: `/categories`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryPostCategories
     * @request POST:/categories
     */
    categoryPostCategories: (
      data: {
        data: {
          /** A string field */
          name: string;
          /** A UID field */
          slug: string;
          /** A text field */
          description?: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.847Z"
           */
          publishedAt: string;
          /** A string field */
          locale?: string;
          /** A relational field */
          posts?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A text field */
            description?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.848Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiCategoryCategoryDocument[];
          };
        },
        void
      >({
        path: `/categories`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryGetCategoriesById
     * @request GET:/categories/{id}
     */
    categoryGetCategoriesById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Sort the result */
        sort?:
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "name"
              | "slug"
              | "description"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A text field */
            description?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.844Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiCategoryCategoryDocument[];
          };
        },
        void
      >({
        path: `/categories/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryPutCategoriesById
     * @request PUT:/categories/{id}
     */
    categoryPutCategoriesById: (
      id: string,
      data: {
        data: {
          /** A string field */
          name?: string;
          /** A UID field */
          slug?: string;
          /** A text field */
          description?: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.849Z"
           */
          publishedAt?: string;
          /** A string field */
          locale?: string;
          /** A relational field */
          posts?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A text field */
            description?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.850Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiCategoryCategoryDocument[];
          };
        },
        void
      >({
        path: `/categories/${id}`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryDeleteCategoriesById
     * @request DELETE:/categories/{id}
     */
    categoryDeleteCategoriesById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "description"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A text field */
            description?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.851Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiCategoryCategoryDocument[];
          };
        },
        void
      >({
        path: `/categories/${id}`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  posts = {
    /**
     * No description
     *
     * @tags post
     * @name PostGetPosts
     * @request GET:/posts
     */
    postGetPosts: (
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Filters to apply to the query */
        filters?: Record<
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        _q?: string;
        /** Pagination parameters */
        pagination?: {
          /** Include total count in response */
          withCount?: boolean;
        } & (
          | {
              /**
               * Page number (1-based)
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              page: number;
              /**
               * Number of entries per page
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              pageSize: number;
            }
          | {
              /**
               * Number of entries to skip
               * @min 0
               * @max 9007199254740991
               */
              start: number;
              /**
               * Maximum number of entries to return
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              limit: number;
            }
        );
        /** Sort the result */
        sort?:
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "cover"
          | "categories"
          | "tags"
          | "localizations"
          | ("cover" | "categories" | "tags" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            title: string;
            /** A UID field */
            slug: string;
            /** A richtext field */
            content?: string;
            /** A text field */
            excerpt?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.855Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A media field */
            cover?: PluginUploadFileDocument;
            /** A relational field */
            categories?: ApiCategoryCategoryDocument[];
            /** A relational field */
            tags?: ApiTagTagDocument[];
            /** A relational field */
            localizations?: ApiPostPostDocument[];
          }[];
        },
        void
      >({
        path: `/posts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags post
     * @name PostPostPosts
     * @request POST:/posts
     */
    postPostPosts: (
      data: {
        data: {
          /** A string field */
          title: string;
          /** A UID field */
          slug: string;
          /** A richtext field */
          content?: string;
          /** A text field */
          excerpt?: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.858Z"
           */
          publishedAt: string;
          /** A string field */
          locale?: string;
          /** A media field */
          cover?: any;
          /** A relational field */
          categories?: string[];
          /** A relational field */
          tags?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "cover"
          | "categories"
          | "tags"
          | "localizations"
          | ("cover" | "categories" | "tags" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            title: string;
            /** A UID field */
            slug: string;
            /** A richtext field */
            content?: string;
            /** A text field */
            excerpt?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.859Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A media field */
            cover?: PluginUploadFileDocument;
            /** A relational field */
            categories?: ApiCategoryCategoryDocument[];
            /** A relational field */
            tags?: ApiTagTagDocument[];
            /** A relational field */
            localizations?: ApiPostPostDocument[];
          };
        },
        void
      >({
        path: `/posts`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags post
     * @name PostGetPostsById
     * @request GET:/posts/{id}
     */
    postGetPostsById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "cover"
          | "categories"
          | "tags"
          | "localizations"
          | ("cover" | "categories" | "tags" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Sort the result */
        sort?:
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "title"
              | "slug"
              | "content"
              | "excerpt"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            title: string;
            /** A UID field */
            slug: string;
            /** A richtext field */
            content?: string;
            /** A text field */
            excerpt?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.856Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A media field */
            cover?: PluginUploadFileDocument;
            /** A relational field */
            categories?: ApiCategoryCategoryDocument[];
            /** A relational field */
            tags?: ApiTagTagDocument[];
            /** A relational field */
            localizations?: ApiPostPostDocument[];
          };
        },
        void
      >({
        path: `/posts/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags post
     * @name PostPutPostsById
     * @request PUT:/posts/{id}
     */
    postPutPostsById: (
      id: string,
      data: {
        data: {
          /** A string field */
          title?: string;
          /** A UID field */
          slug?: string;
          /** A richtext field */
          content?: string;
          /** A text field */
          excerpt?: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.860Z"
           */
          publishedAt?: string;
          /** A string field */
          locale?: string;
          /** A media field */
          cover?: any;
          /** A relational field */
          categories?: string[];
          /** A relational field */
          tags?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "cover"
          | "categories"
          | "tags"
          | "localizations"
          | ("cover" | "categories" | "tags" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            title: string;
            /** A UID field */
            slug: string;
            /** A richtext field */
            content?: string;
            /** A text field */
            excerpt?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.863Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A media field */
            cover?: PluginUploadFileDocument;
            /** A relational field */
            categories?: ApiCategoryCategoryDocument[];
            /** A relational field */
            tags?: ApiTagTagDocument[];
            /** A relational field */
            localizations?: ApiPostPostDocument[];
          };
        },
        void
      >({
        path: `/posts/${id}`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags post
     * @name PostDeletePostsById
     * @request DELETE:/posts/{id}
     */
    postDeletePostsById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "cover"
          | "categories"
          | "tags"
          | "localizations"
          | ("cover" | "categories" | "tags" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "title"
          | "slug"
          | "content"
          | "excerpt"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            title: string;
            /** A UID field */
            slug: string;
            /** A richtext field */
            content?: string;
            /** A text field */
            excerpt?: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.865Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A media field */
            cover?: PluginUploadFileDocument;
            /** A relational field */
            categories?: ApiCategoryCategoryDocument[];
            /** A relational field */
            tags?: ApiTagTagDocument[];
            /** A relational field */
            localizations?: ApiPostPostDocument[];
          };
        },
        void
      >({
        path: `/posts/${id}`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  tags = {
    /**
     * No description
     *
     * @tags tag
     * @name TagGetTags
     * @request GET:/tags
     */
    tagGetTags: (
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        _q?: string;
        /** Pagination parameters */
        pagination?: {
          /** Include total count in response */
          withCount?: boolean;
        } & (
          | {
              /**
               * Page number (1-based)
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              page: number;
              /**
               * Number of entries per page
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              pageSize: number;
            }
          | {
              /**
               * Number of entries to skip
               * @min 0
               * @max 9007199254740991
               */
              start: number;
              /**
               * Maximum number of entries to return
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              limit: number;
            }
        );
        /** Sort the result */
        sort?:
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.867Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiTagTagDocument[];
          }[];
        },
        void
      >({
        path: `/tags`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tag
     * @name TagPostTags
     * @request POST:/tags
     */
    tagPostTags: (
      data: {
        data: {
          /** A string field */
          name: string;
          /** A UID field */
          slug: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.869Z"
           */
          publishedAt: string;
          /** A string field */
          locale?: string;
          /** A relational field */
          posts?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.869Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiTagTagDocument[];
          };
        },
        void
      >({
        path: `/tags`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tag
     * @name TagGetTagsById
     * @request GET:/tags/{id}
     */
    tagGetTagsById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Sort the result */
        sort?:
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
          | (
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale"
            )[]
          | Record<
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >
          | Record<
              | "name"
              | "slug"
              | "createdAt"
              | "updatedAt"
              | "publishedAt"
              | "locale",
              "asc" | "desc"
            >[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.868Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiTagTagDocument[];
          };
        },
        void
      >({
        path: `/tags/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tag
     * @name TagPutTagsById
     * @request PUT:/tags/{id}
     */
    tagPutTagsById: (
      id: string,
      data: {
        data: {
          /** A string field */
          name?: string;
          /** A UID field */
          slug?: string;
          /**
           * A datetime field
           * @default "2025-09-25T16:26:00.870Z"
           */
          publishedAt?: string;
          /** A string field */
          locale?: string;
          /** A relational field */
          posts?: string[];
        };
      },
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.871Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiTagTagDocument[];
          };
        },
        void
      >({
        path: `/tags/${id}`,
        method: "PUT",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags tag
     * @name TagDeleteTagsById
     * @request DELETE:/tags/{id}
     */
    tagDeleteTagsById: (
      id: string,
      query?: {
        /** The fields to return, this doesn't include populatable fields like relations, components, files, or dynamic zones */
        fields?: (
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale"
        )[];
        /** Populate all the first level relations, components, files, and dynamic zones for the entry */
        populate?:
          | "*"
          | "posts"
          | "localizations"
          | ("posts" | "localizations")[];
        /** Filters to apply to the query */
        filters?: Record<
          | "name"
          | "slug"
          | "createdAt"
          | "updatedAt"
          | "publishedAt"
          | "locale",
          any
        >;
        /** Select a locale */
        locale?: string;
        /** Fetch documents based on their status. Default to "published" if not specified. */
        status?: "draft" | "published";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /**
             * The document ID, represented by a UUID
             * @format uuid
             * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
             */
            documentId: string;
            id: number;
            /** A string field */
            name: string;
            /** A UID field */
            slug: string;
            /** A datetime field */
            createdAt?: string;
            /** A datetime field */
            updatedAt?: string;
            /**
             * A datetime field
             * @default "2025-09-25T16:26:00.872Z"
             */
            publishedAt: string;
            /** A string field */
            locale?: string;
            /** A relational field */
            posts?: ApiPostPostDocument[];
            /** A relational field */
            localizations?: ApiTagTagDocument[];
          };
        },
        void
      >({
        path: `/tags/${id}`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  contentTypes = {
    /**
     * No description
     *
     * @tags content-type-builder
     * @name ContentTypeBuilderGetContentTypes
     * @request GET:/content-types
     */
    contentTypeBuilderGetContentTypes: (
      query: {
        kind: "collectionType" | "singleType";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
            uid: string;
            plugin?: string;
            apiID: string;
            schema: {
              displayName: string;
              singularName: string;
              pluralName: string;
              description: string;
              draftAndPublish: boolean;
              kind: "collectionType" | "singleType";
              collectionName?: string;
              attributes: Record<
                string,
                | {
                    type: "media";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    multiple: boolean;
                    required?: boolean;
                    allowedTypes?: string[];
                  }
                | {
                    type: "relation";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    relation: string;
                    /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
                    target: string;
                    targetAttribute: string | null;
                    autoPopulate?: boolean;
                    mappedBy?: string;
                    inversedBy?: string;
                  }
                | {
                    type: "component";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    component: string;
                    repeatable: boolean;
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "dynamiczone";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    components: string[];
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "uid";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    targetField?: string;
                  }
                | {
                    type: string;
                    required?: boolean;
                    unique?: boolean;
                    default?: any;
                    min?: number | string;
                    max?: number | string;
                    minLength?: number;
                    maxLength?: number;
                    enum?: string[];
                    regex?: string;
                    private?: boolean;
                    configurable?: boolean;
                    pluginOptions?: Record<string, any>;
                  }
              >;
              visible: boolean;
              restrictRelationsTo: string[] | null;
              pluginOptions?: Record<string, any>;
              options?: Record<string, any>;
              reviewWorkflows?: boolean;
              populateCreatorFields?: boolean;
              comment?: string;
              version?: string;
            };
          }[];
        },
        void
      >({
        path: `/content-types`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags content-type-builder
     * @name ContentTypeBuilderGetContentTypesByUid
     * @request GET:/content-types/{uid}
     */
    contentTypeBuilderGetContentTypesByUid: (
      uid: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
            uid: string;
            plugin?: string;
            apiID: string;
            schema: {
              displayName: string;
              singularName: string;
              pluralName: string;
              description: string;
              draftAndPublish: boolean;
              kind: "collectionType" | "singleType";
              collectionName?: string;
              attributes: Record<
                string,
                | {
                    type: "media";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    multiple: boolean;
                    required?: boolean;
                    allowedTypes?: string[];
                  }
                | {
                    type: "relation";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    relation: string;
                    /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
                    target: string;
                    targetAttribute: string | null;
                    autoPopulate?: boolean;
                    mappedBy?: string;
                    inversedBy?: string;
                  }
                | {
                    type: "component";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    component: string;
                    repeatable: boolean;
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "dynamiczone";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    components: string[];
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "uid";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    targetField?: string;
                  }
                | {
                    type: string;
                    required?: boolean;
                    unique?: boolean;
                    default?: any;
                    min?: number | string;
                    max?: number | string;
                    minLength?: number;
                    maxLength?: number;
                    enum?: string[];
                    regex?: string;
                    private?: boolean;
                    configurable?: boolean;
                    pluginOptions?: Record<string, any>;
                  }
              >;
              visible: boolean;
              restrictRelationsTo: string[] | null;
              pluginOptions?: Record<string, any>;
              options?: Record<string, any>;
              reviewWorkflows?: boolean;
              populateCreatorFields?: boolean;
              comment?: string;
              version?: string;
            };
          };
        },
        void
      >({
        path: `/content-types/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  components = {
    /**
     * No description
     *
     * @tags content-type-builder
     * @name ContentTypeBuilderGetComponents
     * @request GET:/components
     */
    contentTypeBuilderGetComponents: (params: RequestParams = {}) =>
      this.request<
        {
          data: {
            /** @pattern ^[\w-]+\.[\w-]+$ */
            uid: string;
            category: string;
            apiId: string;
            schema: {
              displayName: string;
              description: string;
              icon?: string;
              connection?: string;
              collectionName?: string;
              attributes: Record<
                string,
                | {
                    type: "media";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    multiple: boolean;
                    required?: boolean;
                    allowedTypes?: string[];
                  }
                | {
                    type: "relation";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    relation: string;
                    /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
                    target: string;
                    targetAttribute: string | null;
                    autoPopulate?: boolean;
                    mappedBy?: string;
                    inversedBy?: string;
                  }
                | {
                    type: "component";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    component: string;
                    repeatable: boolean;
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "dynamiczone";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    components: string[];
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "uid";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    targetField?: string;
                  }
                | {
                    type: string;
                    required?: boolean;
                    unique?: boolean;
                    default?: any;
                    min?: number | string;
                    max?: number | string;
                    minLength?: number;
                    maxLength?: number;
                    enum?: string[];
                    regex?: string;
                    private?: boolean;
                    configurable?: boolean;
                    pluginOptions?: Record<string, any>;
                  }
              >;
              pluginOptions?: Record<string, any>;
            };
          }[];
        },
        void
      >({
        path: `/components`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags content-type-builder
     * @name ContentTypeBuilderGetComponentsByUid
     * @request GET:/components/{uid}
     */
    contentTypeBuilderGetComponentsByUid: (
      uid: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data: {
            /** @pattern ^[\w-]+\.[\w-]+$ */
            uid: string;
            category: string;
            apiId: string;
            schema: {
              displayName: string;
              description: string;
              icon?: string;
              connection?: string;
              collectionName?: string;
              attributes: Record<
                string,
                | {
                    type: "media";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    multiple: boolean;
                    required?: boolean;
                    allowedTypes?: string[];
                  }
                | {
                    type: "relation";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    relation: string;
                    /** @pattern ^((strapi|admin)::[\w-]+|(api|plugin)::[\w-]+\.[\w-]+)$ */
                    target: string;
                    targetAttribute: string | null;
                    autoPopulate?: boolean;
                    mappedBy?: string;
                    inversedBy?: string;
                  }
                | {
                    type: "component";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    component: string;
                    repeatable: boolean;
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "dynamiczone";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    components: string[];
                    required?: boolean;
                    min?: number;
                    max?: number;
                  }
                | {
                    type: "uid";
                    configurable?: false;
                    private?: boolean;
                    pluginOptions?: Record<string, any>;
                    targetField?: string;
                  }
                | {
                    type: string;
                    required?: boolean;
                    unique?: boolean;
                    default?: any;
                    min?: number | string;
                    max?: number | string;
                    minLength?: number;
                    maxLength?: number;
                    enum?: string[];
                    regex?: string;
                    private?: boolean;
                    configurable?: boolean;
                    pluginOptions?: Record<string, any>;
                  }
              >;
              pluginOptions?: Record<string, any>;
            };
          };
        },
        void
      >({
        path: `/components/${uid}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  files = {
    /**
     * No description
     *
     * @tags upload
     * @name UploadGetFiles
     * @request GET:/files
     */
    uploadGetFiles: (
      query?: {
        /** Select specific fields to return in the response */
        fields?: string | string[];
        /** Specify which relations to populate in the response */
        populate?: "*" | string | string[] | Record<string, any>;
        /** Sort the results by specified fields */
        sort?:
          | string
          | string[]
          | Record<string, "asc" | "desc">
          | Record<string, "asc" | "desc">[];
        /** Pagination parameters */
        pagination?: {
          /** Include total count in response */
          withCount?: boolean;
        } & (
          | {
              /**
               * Page number (1-based)
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              page: number;
              /**
               * Number of entries per page
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              pageSize: number;
            }
          | {
              /**
               * Number of entries to skip
               * @min 0
               * @max 9007199254740991
               */
              start: number;
              /**
               * Maximum number of entries to return
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              limit: number;
            }
        );
        /** Apply filters to the query */
        filters?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          width?: number;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          height?: number;
          formats?: Record<string, any>;
          hash: string;
          ext?: string;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          folder?: number;
          folderPath: string;
          provider: string;
          provider_metadata?: Record<string, any> | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: number;
          updatedBy?: number;
        }[],
        void
      >({
        path: `/files`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags upload
     * @name UploadGetFilesById
     * @request GET:/files/{id}
     */
    uploadGetFilesById: (
      id: number,
      query?: {
        /** Select specific fields to return in the response */
        fields?: string | string[];
        /** Specify which relations to populate in the response */
        populate?: "*" | string | string[] | Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          width?: number;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          height?: number;
          formats?: Record<string, any>;
          hash: string;
          ext?: string;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          folder?: number;
          folderPath: string;
          provider: string;
          provider_metadata?: Record<string, any> | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: number;
          updatedBy?: number;
        },
        void
      >({
        path: `/files/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags upload
     * @name UploadDeleteFilesById
     * @request DELETE:/files/{id}
     */
    uploadDeleteFilesById: (id: number, params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          alternativeText?: string | null;
          caption?: string | null;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          width?: number;
          /**
           * @min -9007199254740991
           * @max 9007199254740991
           */
          height?: number;
          formats?: Record<string, any>;
          hash: string;
          ext?: string;
          mime: string;
          size: number;
          url: string;
          previewUrl?: string | null;
          folder?: number;
          folderPath: string;
          provider: string;
          provider_metadata?: Record<string, any> | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: number;
          updatedBy?: number;
        },
        void
      >({
        path: `/files/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  locales = {
    /**
     * No description
     *
     * @tags i18n
     * @name I18NGetLocales
     * @request GET:/locales
     */
    i18NGetLocales: (params: RequestParams = {}) =>
      this.request<
        {
          /**
           * @exclusiveMin 0
           * @max 9007199254740991
           */
          id: number;
          /**
           * @format uuid
           * @pattern ^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$
           */
          documentId: string;
          name: string;
          /**
           * @minLength 2
           * @maxLength 2
           */
          code: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string | null;
          isDefault: boolean;
        }[],
        void
      >({
        path: `/locales`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  connect = {
    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetConnect
     * @request GET:/connect/(.*)
     */
    usersPermissionsGetConnect: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/connect/(.*)`,
        method: "GET",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthLocal
     * @request POST:/auth/local
     */
    usersPermissionsPostAuthLocal: (
      data: {
        identifier: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          jwt: string;
          user: {
            id: number;
            documentId: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            role?:
              | number
              | {
                  id: number;
                  name: string;
                  description: string | null;
                  type: string;
                  createdAt: string;
                  updatedAt: string;
                };
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        },
        void
      >({
        path: `/auth/local`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthLocalRegister
     * @request POST:/auth/local/register
     */
    usersPermissionsPostAuthLocalRegister: (
      data: {
        username: string;
        /**
         * @format email
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         */
        email: string;
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        | {
            jwt: string;
            user: {
              id: number;
              documentId: string;
              username: string;
              email: string;
              provider: string;
              confirmed: boolean;
              blocked: boolean;
              role?:
                | number
                | {
                    id: number;
                    name: string;
                    description: string | null;
                    type: string;
                    createdAt: string;
                    updatedAt: string;
                  };
              createdAt: string;
              updatedAt: string;
              publishedAt: string;
            };
          }
        | {
            user: {
              id: number;
              documentId: string;
              username: string;
              email: string;
              provider: string;
              confirmed: boolean;
              blocked: boolean;
              role?:
                | number
                | {
                    id: number;
                    name: string;
                    description: string | null;
                    type: string;
                    createdAt: string;
                    updatedAt: string;
                  };
              createdAt: string;
              updatedAt: string;
              publishedAt: string;
            };
          },
        void
      >({
        path: `/auth/local/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetAuthByProviderCallback
     * @request GET:/auth/{provider}/callback
     */
    usersPermissionsGetAuthByProviderCallback: (
      provider: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          jwt: string;
          user: {
            id: number;
            documentId: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            role?:
              | number
              | {
                  id: number;
                  name: string;
                  description: string | null;
                  type: string;
                  createdAt: string;
                  updatedAt: string;
                };
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        },
        void
      >({
        path: `/auth/${provider}/callback`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthForgotPassword
     * @request POST:/auth/forgot-password
     */
    usersPermissionsPostAuthForgotPassword: (
      data: {
        /**
         * @format email
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok: boolean;
        },
        void
      >({
        path: `/auth/forgot-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthResetPassword
     * @request POST:/auth/reset-password
     */
    usersPermissionsPostAuthResetPassword: (
      data: {
        code: string;
        password: string;
        passwordConfirmation: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          jwt: string;
          user: {
            id: number;
            documentId: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            role?:
              | number
              | {
                  id: number;
                  name: string;
                  description: string | null;
                  type: string;
                  createdAt: string;
                  updatedAt: string;
                };
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        },
        void
      >({
        path: `/auth/reset-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetAuthEmailConfirmation
     * @request GET:/auth/email-confirmation
     */
    usersPermissionsGetAuthEmailConfirmation: (params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/auth/email-confirmation`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthSendEmailConfirmation
     * @request POST:/auth/send-email-confirmation
     */
    usersPermissionsPostAuthSendEmailConfirmation: (
      data: {
        /**
         * @format email
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         */
        email: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          email: string;
          sent: boolean;
        },
        void
      >({
        path: `/auth/send-email-confirmation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostAuthChangePassword
     * @request POST:/auth/change-password
     */
    usersPermissionsPostAuthChangePassword: (
      data: {
        currentPassword: string;
        password: string;
        passwordConfirmation: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          jwt: string;
          user: {
            id: number;
            documentId: string;
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            role?:
              | number
              | {
                  id: number;
                  name: string;
                  description: string | null;
                  type: string;
                  createdAt: string;
                  updatedAt: string;
                };
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
          };
        },
        void
      >({
        path: `/auth/change-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetUsersCount
     * @request GET:/users/count
     */
    usersPermissionsGetUsersCount: (
      query?: {
        /** Apply filters to the query */
        filters?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<number, void>({
        path: `/users/count`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetUsers
     * @request GET:/users
     */
    usersPermissionsGetUsers: (
      query?: {
        /** Select specific fields to return in the response */
        fields?: string | string[];
        /** Specify which relations to populate in the response */
        populate?: "*" | string | string[] | Record<string, any>;
        /** Sort the results by specified fields */
        sort?:
          | string
          | string[]
          | Record<string, "asc" | "desc">
          | Record<string, "asc" | "desc">[];
        /** Pagination parameters */
        pagination?: {
          /** Include total count in response */
          withCount?: boolean;
        } & (
          | {
              /**
               * Page number (1-based)
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              page: number;
              /**
               * Number of entries per page
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              pageSize: number;
            }
          | {
              /**
               * Number of entries to skip
               * @min 0
               * @max 9007199254740991
               */
              start: number;
              /**
               * Maximum number of entries to return
               * @exclusiveMin 0
               * @max 9007199254740991
               */
              limit: number;
            }
        );
        /** Apply filters to the query */
        filters?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        }[],
        void
      >({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostUsers
     * @request POST:/users
     */
    usersPermissionsPostUsers: (
      data: {
        username: string;
        /**
         * @format email
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         */
        email: string;
        password: string;
        role?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        },
        void
      >({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetUsersMe
     * @request GET:/users/me
     */
    usersPermissionsGetUsersMe: (
      query?: {
        /** Select specific fields to return in the response */
        fields?: string | string[];
        /** Specify which relations to populate in the response */
        populate?: "*" | string | string[] | Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        },
        void
      >({
        path: `/users/me`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetUsersById
     * @request GET:/users/{id}
     */
    usersPermissionsGetUsersById: (
      id: string,
      query?: {
        /** Select specific fields to return in the response */
        fields?: string | string[];
        /** Specify which relations to populate in the response */
        populate?: "*" | string | string[] | Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        },
        void
      >({
        path: `/users/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPutUsersById
     * @request PUT:/users/{id}
     */
    usersPermissionsPutUsersById: (
      id: string,
      data: {
        username?: string;
        /**
         * @format email
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         */
        email?: string;
        password?: string;
        role?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        },
        void
      >({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsDeleteUsersById
     * @request DELETE:/users/{id}
     */
    usersPermissionsDeleteUsersById: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          id: number;
          documentId: string;
          username: string;
          email: string;
          provider: string;
          confirmed: boolean;
          blocked: boolean;
          role?:
            | number
            | {
                id: number;
                name: string;
                description: string | null;
                type: string;
                createdAt: string;
                updatedAt: string;
              };
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
        },
        void
      >({
        path: `/users/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  roles = {
    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetRolesById
     * @request GET:/roles/{id}
     */
    usersPermissionsGetRolesById: (id: string, params: RequestParams = {}) =>
      this.request<
        {
          role: {
            id: number;
            documentId: string;
            name: string;
            description: string | null;
            type: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            nb_users?: number;
            permissions?: Record<
              string,
              {
                controllers: Record<
                  string,
                  Record<
                    string,
                    {
                      enabled: boolean;
                      policy: string;
                    }
                  >
                >;
              }
            >;
            users?: any[];
          };
        },
        void
      >({
        path: `/roles/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetRoles
     * @request GET:/roles
     */
    usersPermissionsGetRoles: (params: RequestParams = {}) =>
      this.request<
        {
          roles: {
            id: number;
            documentId: string;
            name: string;
            description: string | null;
            type: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
            nb_users?: number;
            permissions?: Record<
              string,
              {
                controllers: Record<
                  string,
                  Record<
                    string,
                    {
                      enabled: boolean;
                      policy: string;
                    }
                  >
                >;
              }
            >;
            users?: any[];
          }[];
        },
        void
      >({
        path: `/roles`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPostRoles
     * @request POST:/roles
     */
    usersPermissionsPostRoles: (
      data: {
        name: string;
        description?: string;
        type: string;
        permissions?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok: boolean;
        },
        void
      >({
        path: `/roles`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsPutRolesByRole
     * @request PUT:/roles/{role}
     */
    usersPermissionsPutRolesByRole: (
      role: string,
      data: {
        name?: string;
        description?: string;
        type?: string;
        permissions?: Record<string, any>;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok: boolean;
        },
        void
      >({
        path: `/roles/${role}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsDeleteRolesByRole
     * @request DELETE:/roles/{role}
     */
    usersPermissionsDeleteRolesByRole: (
      role: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          ok: boolean;
        },
        void
      >({
        path: `/roles/${role}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  permissions = {
    /**
     * No description
     *
     * @tags users-permissions
     * @name UsersPermissionsGetPermissions
     * @request GET:/permissions
     */
    usersPermissionsGetPermissions: (params: RequestParams = {}) =>
      this.request<
        {
          permissions: Record<
            string,
            {
              controllers: Record<
                string,
                Record<
                  string,
                  {
                    enabled: boolean;
                    policy: string;
                  }
                >
              >;
            }
          >;
        },
        void
      >({
        path: `/permissions`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
