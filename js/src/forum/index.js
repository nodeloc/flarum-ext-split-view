import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import ComposerState from 'flarum/forum/states/ComposerState';
import ComposerBody from 'flarum/forum/components/ComposerBody';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import TextEditor from 'flarum/common/components/TextEditor';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
app.initializers.add('nodeloc-split-view', () => {
	extend(ComposerState.prototype, 'load', function (_, componentClass) {
		this.isSplitView = false;
	});

	extend(TextEditor.prototype, 'controlItems', function (items) {
		items.add(
			'preview',
			<Tooltip text={app.translator.trans('core.forum.composer.preview_tooltip')}>
				<Button icon="fas fa-columns" className="Button Button--icon" onclick={this.attrs.preview} />
			</Tooltip>
		);
	});

	extend(ComposerBody.prototype, 'headerItems', function (items) {
		if (app.current.get('stream')?.discussion) {
			return
		}

		items.add(
			'preview-discussion',
			<div
				className={`Split-view Post-body ${app.composer.isSplitView ? '' : 'hidden'}`}
			></div>,
			50
		);
	});

	DiscussionComposer.prototype.jumpToPreview = function (e) {
		if (!(e instanceof MouseEvent)) {
			return;
		}

		this.composer.isSplitView = !this.composer.isSplitView;

		if (this.composer.isSplitView) {
			let previousContent = this.composer.fields.content();
			s9e.TextFormatter.preview(
				this.composer.fields.content(),
				this.$('.Split-view')[0]
			);
			this.composerPreviewInterval = setInterval(() => {
				const currentContent = this.composer.fields.content();
				if (currentContent !== previousContent) {
					previousContent = currentContent;
					s9e.TextFormatter.preview(
						currentContent,
						this.$('.Split-view')[0]
					);
				}
			}, 100);
		} else {
			clearInterval(this.composerPreviewInterval);
			this.composerPreviewInterval = null;
		}
	};

	extend(ComposerBody.prototype, 'oncreate', function () {
		this.composerPositionInterval = setInterval(function () {
			if (app.composer.position !== "normal") {
				if (app.current?.data?.routeName !== "composer") {
					$composer.css("padding-bottom", '');
					$editorContainer.css("padding-bottom", '');
					return;
				}
			}
			const $editorContainer = $(".TextEditor-editorContainer");
			let $composer = this.$('.ComposerPage');
			if (!$composer.length)
				$composer = this.$('.Composer');
			if (app.composer.isSplitView) {
				const $textarea = this.$('.TextEditor textarea');
				const $splitView = this.$('.Split-view');

				if ($editorContainer.offset()) {
					/**
					 * 计算当前屏幕是否为手机，以及是否有足够的空间在竖向方向上显示预览
					 * 手机端界面，composer为非全屏，且屏幕有大于一倍textarea高度剩余，将composer拉长。
					*/
					let mode = "normal";
					const textareaHeight = $editorContainer.height();
					const screenHeight = window.innerHeight;
					if (app.screen() === "phone") {
						const composerHeight = $(".ComposerBody").height();
						const composerPaddingBottom = parseInt(($editorContainer.css("padding-bottom") || "0px").substring(0, -2)) || 0;
						if (screenHeight - textareaHeight - composerHeight + composerPaddingBottom > 0) {
							mode = "vertical";
						}
					}


					if (mode === "normal") {
						const width = parseInt($editorContainer.width() / 2);
						const height = parseInt($editorContainer.height());
						$textarea.css({ width });
						$composer.css("padding-bottom", '');
						$editorContainer.css("padding-bottom", '');
						$splitView.removeClass("vertical");
						$splitView.css({
							width, height,
							top: $textarea.offset().top - $composer.offset().top,
							left: $textarea.offset().left - $composer.offset().left + $textarea.width(),
						});
					} else {
						const width = parseInt($editorContainer.width());
						const height = parseInt($editorContainer.height());
						$textarea.css({ width });
						$composer.css({ paddingBottom: height });
						$editorContainer.css({ paddingBottom: height });
						$splitView.addClass("vertical");
						$splitView.css({
							width: $textarea.width(),
							height: $textarea.height() + 10,
							top: $textarea.offset().top - $composer.offset().top + height,
							left: $textarea.offset().left - $composer.offset().left,
						});
					}
				}
			} else {
				$composer.css("padding-bottom", '');
				$editorContainer.css("padding-bottom", '');
			}
		}, 100);
	});

	extend(ComposerBody.prototype, 'onremove', function () {
		//该定时器应当被正确移除
		this.composerPreviewInterval && clearInterval(this.composerPreviewInterval);
		clearInterval(this.composerPositionInterval);
	})
});
