--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

-- Started on 2021-01-27 05:22:39 EET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 22628)
-- Name: cc_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cc_info (
    ccid integer NOT NULL,
    ccnb bigint NOT NULL,
    expirydate date NOT NULL,
    ccv integer NOT NULL,
    user_id integer NOT NULL,
    balance bigint NOT NULL
);


ALTER TABLE public.cc_info OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 22638)
-- Name: cc_info_ccid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.cc_info ALTER COLUMN ccid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cc_info_ccid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 48965
    CACHE 1
);


--
-- TOC entry 200 (class 1259 OID 22604)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    birthday date NOT NULL,
    nationality text NOT NULL,
    email text NOT NULL,
    phonenb text NOT NULL,
    admin boolean NOT NULL,
    address text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 22614)
-- Name: user_id_seq1; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq1
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 9899999999
    CACHE 1
);


--
-- TOC entry 3069 (class 0 OID 22628)
-- Dependencies: 202
-- Data for Name: cc_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cc_info (ccid, ccnb, expirydate, ccv, user_id, balance) FROM stdin;
20	987654231	2021-01-28	789	14	0
19	123456798	2021-01-16	159	14	986
21	152314897	2021-02-06	156	14	173
\.


--
-- TOC entry 3067 (class 0 OID 22604)
-- Dependencies: 200
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstname, lastname, birthday, nationality, email, phonenb, admin, address, password) FROM stdin;
14	admin	admin	1998-02-23	Lebanese	admin@admin.com	+9614848	t	admin	$2b$10$LG6aJtxLACOVLHaYC/Xpg.svx635QJb340y/9OVU7pKTC1fyt5pVS
19	User	User	2021-01-14	cefdfs	user@user.com	4864845684+468njdcgh	t	vfewydfw	$2b$10$kLUkgz1XYBoCcK/tL8yhT.CLzrqPytGJHbCfTrE7EAiLk5j8VyS9W
\.


--
-- TOC entry 3076 (class 0 OID 0)
-- Dependencies: 203
-- Name: cc_info_ccid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cc_info_ccid_seq', 21, true);


--
-- TOC entry 3077 (class 0 OID 0)
-- Dependencies: 201
-- Name: user_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq1', 19, true);


--
-- TOC entry 2935 (class 2606 OID 22632)
-- Name: cc_info cc_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cc_info
    ADD CONSTRAINT cc_info_pkey PRIMARY KEY (ccid);


--
-- TOC entry 2933 (class 2606 OID 22611)
-- Name: users user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2936 (class 2606 OID 22633)
-- Name: cc_info cc_info_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cc_info
    ADD CONSTRAINT cc_info_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


-- Completed on 2021-01-27 05:22:39 EET

--
-- PostgreSQL database dump complete
--

