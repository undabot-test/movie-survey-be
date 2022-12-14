PGDMP     6                    z            postgres    14.3 (Debian 14.3-1.pgdg110+1)    14.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13757    postgres    DATABASE     \   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3343                        3079    16384 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false                       0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            ?            1259    16395    question    TABLE     ?   CREATE TABLE public.question (
    "questionId" character varying NOT NULL,
    "questionType" character varying NOT NULL,
    label character varying NOT NULL,
    required boolean NOT NULL,
    attributes text
);
    DROP TABLE public.question;
       public         heap    postgres    false            ?            1259    16402    survey    TABLE     ?   CREATE TABLE public.survey (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL
);
    DROP TABLE public.survey;
       public         heap    postgres    false    2            ?            1259    16410    survey_questions_question    TABLE     ?   CREATE TABLE public.survey_questions_question (
    "surveyId" uuid NOT NULL,
    "questionQuestionId" character varying NOT NULL
);
 -   DROP TABLE public.survey_questions_question;
       public         heap    postgres    false                      0    16395    question 
   TABLE DATA           ]   COPY public.question ("questionId", "questionType", label, required, attributes) FROM stdin;
    public          postgres    false    210   ?                 0    16402    survey 
   TABLE DATA           8   COPY public.survey (id, title, description) FROM stdin;
    public          postgres    false    211          	          0    16410    survey_questions_question 
   TABLE DATA           U   COPY public.survey_questions_question ("surveyId", "questionQuestionId") FROM stdin;
    public          postgres    false    212   ?       y           2606    16416 8   survey_questions_question PK_9ef39a48488484c4d82c6c1eb01 
   CONSTRAINT     ?   ALTER TABLE ONLY public.survey_questions_question
    ADD CONSTRAINT "PK_9ef39a48488484c4d82c6c1eb01" PRIMARY KEY ("surveyId", "questionQuestionId");
 d   ALTER TABLE ONLY public.survey_questions_question DROP CONSTRAINT "PK_9ef39a48488484c4d82c6c1eb01";
       public            postgres    false    212    212            u           2606    16409 %   survey PK_f0da32b9181e9c02ecf0be11ed3 
   CONSTRAINT     e   ALTER TABLE ONLY public.survey
    ADD CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.survey DROP CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3";
       public            postgres    false    211            s           2606    16401 '   question PK_f5c864430d1f3626bc6671d6b8d 
   CONSTRAINT     q   ALTER TABLE ONLY public.question
    ADD CONSTRAINT "PK_f5c864430d1f3626bc6671d6b8d" PRIMARY KEY ("questionId");
 S   ALTER TABLE ONLY public.question DROP CONSTRAINT "PK_f5c864430d1f3626bc6671d6b8d";
       public            postgres    false    210            v           1259    16417    IDX_18d8af7d7653fb35e80194f770    INDEX     l   CREATE INDEX "IDX_18d8af7d7653fb35e80194f770" ON public.survey_questions_question USING btree ("surveyId");
 4   DROP INDEX public."IDX_18d8af7d7653fb35e80194f770";
       public            postgres    false    212            w           1259    16418    IDX_909e5fd2939d709df6d77eb531    INDEX     v   CREATE INDEX "IDX_909e5fd2939d709df6d77eb531" ON public.survey_questions_question USING btree ("questionQuestionId");
 4   DROP INDEX public."IDX_909e5fd2939d709df6d77eb531";
       public            postgres    false    212            z           2606    16419 8   survey_questions_question FK_18d8af7d7653fb35e80194f770c    FK CONSTRAINT     ?   ALTER TABLE ONLY public.survey_questions_question
    ADD CONSTRAINT "FK_18d8af7d7653fb35e80194f770c" FOREIGN KEY ("surveyId") REFERENCES public.survey(id) ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public.survey_questions_question DROP CONSTRAINT "FK_18d8af7d7653fb35e80194f770c";
       public          postgres    false    211    212    3189            {           2606    16424 8   survey_questions_question FK_909e5fd2939d709df6d77eb5312    FK CONSTRAINT     ?   ALTER TABLE ONLY public.survey_questions_question
    ADD CONSTRAINT "FK_909e5fd2939d709df6d77eb5312" FOREIGN KEY ("questionQuestionId") REFERENCES public.question("questionId") ON UPDATE CASCADE ON DELETE CASCADE;
 d   ALTER TABLE ONLY public.survey_questions_question DROP CONSTRAINT "FK_909e5fd2939d709df6d77eb5312";
       public          postgres    false    212    3187    210               ?   x?5??
?0E痯?dR?B?.]?:9֥K4?M?i ?????㹜{F?ބn?Ƃ??b?+????Hh???Oϙ??Lt?9???+#C?5N?9??[????=??K?趮t0?n???J???+N         ?   x?=??? ?gy???UJ?M?c?? ?T"????m??cMS)?8E?ʙ?i[]/??|??fM?eq3v??!'?>?E??(??_???HD6??A?L٬?s?w?nQ??g?/y?i?1CZ??$o)D?>?c$??Gy????r>      	   A   x?3233HI12?M5JI?51J6Ե0?4?5?0I2LI3233I?L????2"FeQjYfj9W? *p     