<!-- <button type="button" class="btn btn-primary btn-xs" data-toggle="collapse" href="#installRepoConfigUpgrade" aria-expanded="true" aria-controls="installRepoConfigUpgrade">Configure the TeamForge installation repository.</button>
	<div class="collapse in" id="installRepoConfigUpgrade" markdown="1">
	<div class="well well-lg" markdown="1"> -->
	<h3>TeamForge Installation Repository Configuration for Sites with Internet Access</h3>

	1. Contact the [Digital.ai Support](https://support.digital.ai) and download the TeamForge VAR::identifiers.teamforge installation repository package to `/tmp`.
	2. Install the repository package.
	   ```shell
	   yum install -y /tmp/VAR::identifiers.teamforge_noarch_repo_name
	   ````
	3. Refresh your repository cache.
	   ```shell
	   yum clean all
	   ````

	<h3>TeamForge Installation Repository Configuration for Sites without Internet Access</h3>

	1. Contact the [Digital.ai Support](https://support.digital.ai) to get the auxiliary installer package for TeamForge VAR::identifiers.teamforge disconnected installation and save it in `/tmp`.
	   * VAR::identifiers.rhel_centos_past 64 bit: `VAR::identifiers.teamforge_rhel_centos_past_64_bit_dm_repo_name`
	   * VAR::identifiers.rhel_centos_now 64 bit: `VAR::identifiers.teamforge_rhel_centos_now_64_bit_dm_repo_name`
	   * In addition to the above CentOS VAR::identifiers.rhel_centos_past 64 bit RPM package, you must get the following CentOS VAR::identifiers.rhel_centos_past compatibility RPM, which is required for TeamForge VAR::identifiers.teamforge disconnected media installation on CentOS VAR::identifiers.rhel_centos_past profile: `VAR::identifiers.centos_compat_rpm`.

	2. Unpack the disconnected installation package.
	   ```shell
	   rpm -Uvh <package-name>
	   ````
	3. Unpack the `VAR::identifiers.centos_compat_rpm` package if you are installing TeamForge VAR::identifiers.teamforge on CentOS VAR::identifiers.rhel_centos_past.
	   ```shell
	   rpm -ivh VAR::identifiers.centos_compat_rpm
	   ````
<!-- 1. If you are installing TeamForge VAR::identifiers.teamforge on VAR::identifiers.rhel_centos_past, contact the [Digital.ai Support](https://support.digital.ai) to get the `python-modules-sources-el7.zip` file and unzip it to `/opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources`. -->
   <!-- https://forge.collab.net/sf/go/artf318790 -->
   <!-- https://forge.collab.net/sf/go/artf392772 -->
   <!-- ```shell
   unzip python-modules-sources-el7.zip -d /opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources
   ```` -->
   <!-- If you are installing TeamForge VAR::identifiers.teamforge on VAR::identifiers.rhel_centos_now, contact the [Digital.ai Support](https://support.digital.ai) to get the `python-modules-sources-el8.zip` file and unzip it to `/opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources`. -->
   <!-- https://forge.collab.net/sf/go/artf318790 -->
   <!-- https://forge.collab.net/sf/go/artf392772 -->
   <!-- ```shell
   unzip python-modules-sources-el8.zip -d /opt/collabnet/teamforge/service/reviewboard/resources/SOURCES/python-modules-sources
   ```` -->
	4. If not mounted already, mount the RHEL/CentOS installation DVD.

	   The DVD contains the necessary software and utilities required for installing TeamForge without internet access. In the following commands, replace "cdrom" with the identifier for your server's CD/DVD drive, if necessary.
	   ```shell
	   cd /media/
	   mkdir cdrom
	   mount /dev/cdrom ./cdrom/
	   ````

	   If there are any spaces in the automount, unmount it first and mount it as a filepath, with no spaces.
	5. Create a yum configuration file that points to the RHEL/CentOS installation DVD.
	   ```shell
	   vi /etc/yum.repos.d/cdrom.repo
	   ````

	   Here's a sample yum configuration file.
	   ```shell
	   [RHEL-CDROM]
	   name=RHEL CDRom 			
	   baseurl=file:///media/cdrom/Server/
	   gpgfile=file:///media/cdrom/RPM-GPG-KEY-redhat-release 
	   enabled=1
	   gpgcheck=0
	   ````
	6. Verify your yum configuration files.
	   ```shell
	   yum list httpd
	   yum list apr
	   ````
	<!-- </div>
	</div> -->