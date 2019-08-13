--
-- PostgreSQL database dump
--

-- Dumped from database version 11.4
-- Dumped by pg_dump version 11.4

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

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: collections; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.collections (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    base_id uuid NOT NULL,
    name character varying(80) NOT NULL
);


--
-- Name: comment_versions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comment_versions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    text text
);


--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    created_by uuid,
    active_version_id integer
);


--
-- Name: document_versions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.document_versions (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying(120) NOT NULL,
    data jsonb NOT NULL,
    document_id uuid NOT NULL,
    created_on timestamp without time zone,
    created_by uuid NOT NULL
);


--
-- Name: documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.documents (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    document_collection_id uuid NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    archived_on timestamp without time zone,
    deleted_on timestamp without time zone,
    created_by uuid,
    archived_by uuid,
    deleted_by uuid
);


--
-- Name: namespaces; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.namespaces (
    id uuid DEFAULT public.uuid_generate_v1() NOT NULL,
    name character varying(80) NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    email character varying(80) NOT NULL
);


--
-- Name: namespaces bases_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.namespaces
    ADD CONSTRAINT bases_pk PRIMARY KEY (id);


--
-- Name: collections document_collection_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT document_collection_pk PRIMARY KEY (id);


--
-- Name: comment_versions document_comment_versions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comment_versions
    ADD CONSTRAINT document_comment_versions_pk PRIMARY KEY (id);


--
-- Name: comments document_comments_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT document_comments_pk PRIMARY KEY (id);


--
-- Name: document_versions document_versions_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_versions
    ADD CONSTRAINT document_versions_pk PRIMARY KEY (id);


--
-- Name: documents documents_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: document_collection_name_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX document_collection_name_uindex ON public.collections USING btree (name);


--
-- Name: users_email_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX users_email_uindex ON public.users USING btree (email);


--
-- Name: collections document_collection_bases_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.collections
    ADD CONSTRAINT document_collection_bases_id_fk FOREIGN KEY (base_id) REFERENCES public.namespaces(id);


--
-- Name: comments document_comments_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT document_comments_users_id_fk FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- Name: document_versions document_versions_documents_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_versions
    ADD CONSTRAINT document_versions_documents_id_fk FOREIGN KEY (document_id) REFERENCES public.documents(id);


--
-- Name: document_versions document_versions_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.document_versions
    ADD CONSTRAINT document_versions_users_id_fk FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- Name: documents documents_document_collection_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_document_collection_id_fk FOREIGN KEY (document_collection_id) REFERENCES public.collections(id);


--
-- Name: documents documents_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_users_id_fk FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- Name: documents documents_users_id_fk_2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_users_id_fk_2 FOREIGN KEY (archived_by) REFERENCES public.users(id);


--
-- Name: documents documents_users_id_fk_3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_users_id_fk_3 FOREIGN KEY (deleted_by) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

