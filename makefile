.PHONY: add status commit push all

# Add all changes to staging
add:
	git add *

# Show the current status of the repository
status:
	git status

# Commit changes with a default message
commit:
	git commit -m "jenkins editing"

# Push changes to the remote repository
push:
	git push

# Run all steps together
all: add status commit push

