for i in `ls games/**/*.json`; do
    echo linting $i;
    jsonlint --quiet --in-place --indent "    " $i;
done
