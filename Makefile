build/main.zip:
	mkdir -p build
	cd extension && \
	zip -r ../build/main.zip * && \
	cd ..

clean:
	rm build/main.zip
	rmdir build
