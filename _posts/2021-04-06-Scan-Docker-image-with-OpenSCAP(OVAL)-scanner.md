---
layout: single
permalink: /posts/scan/
permalink_name: /scan
title: Scan Docker image with OpenSCAP (OVAL) scanner
---

## Step 1: Installation

We will use the the `oscap-docker` tool from package `openscap-containers`. First we need to make sure that we need to install related packages:

```bash
$ sudo apt-get install atomic docker python-docker-py
```

After the installation of the related packages, you run the following to install `openscap-containers`

```bash
$ sudo apt-get install openscap-containers
```

The `oscap-docker` is a simple tool providing interface to use oscap in Docker environment. It allows you to scan running Docker containers and images almost in the same way as scan of local machine.

## Step 2: Scan Docker containers and images

The usage of oscap-docker is quite simple, command has usually this format:

```bash
$ oscap-docker <image/container>[-cve] <image/container identifier> <oscap parameters>
```

### [Optional] CVE scan of container

First, you need to bring up the Mininet by the following commend line:

```bash
$ sudo ./topo.py
```

Now, we can perform CVE scan of our container by running the command below. It will generate OVAL results file and human-readable HTML report.

```bash
$ oscap-docker container-cve our-rhel7-container
```

### [Advanced usage] Scan Docker container using custom security policy

There is an option to use your custom security-policy to scan container. We would use [SSG](https://www.open-scap.org/security-policies/scap-security-guide/) in this example. At first, we have to install it. It install SSG SCAP security content to *“/usr/share/xml/scap/ssg/content/”*.

```bash
$ sudo apt-get install scap-security-guide
```

Now, we perform scan using custom content.

#### Scanning of container

```bash
$ oscap-docker container our-rhel7-container xccdf eval --profile ospp --report report.html /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml 
```

#### Scanning of images

You can also scan Docker images in the same way. In the following example, we will scan against a profile of our choice.

```bash
$ oscap-docker image registry.access.redhat.com/rhel7 xccdf eval --profile ospp --report report.html /usr/share/xml/scap/ssg/content/ssg-rhel7-ds.xml 
```

#### Useful link:

1. https://www.open-scap.org/resources/documentation/security-compliance-of-rhel7-docker-containers/